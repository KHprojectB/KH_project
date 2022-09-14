package com.myhome.web.login.controller;

import java.net.URLEncoder;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {
	@GetMapping("/login")
	public String LoginForm() {
		return "login/loginForm";		// 로그인 페이지
	}
	
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {	// request써도 되지만 직접 session써도 됨
		//1. 세션을 종료
		session.invalidate();
		//2. 홈으로 이동
		return "redirect:/";
	}
	
	@PostMapping("/login")
	public String Login(String id, String pwd, String toURL, boolean rememberId, 
			HttpServletRequest request, HttpServletResponse response) throws Exception {	// rememberId는 loginForm.jsp 에 있고 체크하면 쿠키에 아이디 저장
		System.out.println("id : " + id);
		System.out.println("pwd : " + pwd);
		System.out.println("rememberId : " + rememberId);		// 쿠키 생성전에 어떤식으로 값이 나오는지 확인. String이라서 on으로 나옴. 체크되면 true 안되면 false로 하면 편하니까 boolean으로 바꿈
		// 1. id, pwd 확인
		if(!loginCheck(id, pwd)) {
			// 2-1. 일치하지않으면 loginForm으로 이동.
			String msg = URLEncoder.encode("id 또는 pwd 가 일치하지 않습니다.", "utf-8");
			
			return "redirect:/login/login?msg=" + msg;
		}
		// 2-2. id, pwd 일치하면,
		// 세션객체를 얻어오기
		HttpSession session = request.getSession();	// request로 세션을 얻어와서
		// 세션객체에 id를 저장
		session.setAttribute("id", id);				// 거기에 id를 저장하는거
		
		if(rememberId) {
			// 쿠키를 생성
			Cookie cookie = new Cookie("id", id);
			//	응답에 저장
			response.addCookie(cookie);
		} else {
			// 쿠키를 삭제
			Cookie cookie = new Cookie("id", id);
			cookie.setMaxAge(0);
			//	응답에 저장
			response.addCookie(cookie);
		}
		
		//		3) 홈으로 이동
		toURL = toURL==null || toURL.equals("") ? "/" : toURL;
		
		return "redirect:" + toURL;		// 메인페이지, 또는 특정아이디비번입력시 관리자페이지?  homeContoller 에서 home을 index으로 바꾸면 redirect:/ 만 써도 됨. 안바꾸고 그냥 index해도 되는데 이럴경우 redirect 쓰면 작동왜 안하지
	}

	private boolean loginCheck(String id, String pwd) {
		return "manager".equals(id) && "1234".equals(pwd);		// 아이디와 비번이 이거일때 일치해서 홈으로 이동. 후에 관리자를 이거로 하면 될듯
	}															// 문자와 매개변수 자리를 지금처럼 바꿔놓으면 null 체크 안해도 된다고 하심
}
