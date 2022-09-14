package com.myhome.web.board;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {
	@GetMapping("/list")
	public String list(HttpServletRequest request) {
		// 로그인 체크
		if(!loginCheck(request)) {
			return "redirect:/login/login?toURL="+request.getRequestURL();	// get방식으로 로그인화면한테 보내는거. 그럼 이제 loginForm으로 가야됨
		}
		return "/board/boardList";
	}

	private boolean loginCheck(HttpServletRequest request) {
		// 1. 세션을 얻어서
		HttpSession session = request.getSession();
		// 2. 세션에 id가 있는지 확인
//		if(session.getAttribute("id") != null) {
//			return true;
//		} else {
//			return false; 
//		}
		return session.getAttribute("id") != null;	// 위의 if문과 이 한줄은 겉은 내용. id가 null이 아니면 이게 참. null이면 이게 거짓
	}

}
