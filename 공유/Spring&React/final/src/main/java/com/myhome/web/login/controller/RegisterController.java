package com.myhome.web.login.controller;

import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.Valid;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.StringArrayPropertyEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.myhome.web.UserValidator;
import com.myhome.web.login.model.UserDTO;

@Controller								// 프로그램 등록
@RequestMapping("/register")			// 이러면 get post mapping 에서 register빼도 됨. 여기서 빠져도 된다는거지 브라우저는 아님!!
public class RegisterController {	
	
	@InitBinder
	public void toDate(WebDataBinder binder) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(df, false));	// 날짜형식을 자동 변환
		binder.registerCustomEditor(String[].class, new StringArrayPropertyEditor("#"));	//#구분자로 배열을 나눔
		binder.setValidator(new UserValidator()); // UserValidator를 WebDataBinder의 로컬 Validator로 등록
	}
	
	@RequestMapping(value="/add", method= {RequestMethod.GET, RequestMethod.POST})	
//	@GetMapping("/add")
	public String register() {
		return "login/registerForm";	//WEB-INF/views/login/registerForm.jsp
	}
	
//	@RequestMapping(value = "/register/save", method = RequestMethod.POST)	// 회원가입하면 넘어가지는 페이지니까 로그인페이지??? 로 가나?
	@PostMapping("/save")
	public String save(UserDTO userDto, Model model) throws Exception {

		// 1. 유효성 검사
		if(!isvalid(userDto)) {
			String msg = URLEncoder.encode("뭔가를 잘못 입력하셧습니다.", "utf-8");
			
			model.addAttribute("msg", msg);	// ("name", "value")
			return "forward:/register/add";
//			return "redirect:/register/add?msg=" + msg;		위 두줄과 이 한줄이 같은내용임. 여러개보내야할때는 모델을 씀
		}
		
		// 2. db에 신규회원 정보를 저장
		return "login/registerInfo";
	}
	
	private boolean isvalid(UserDTO userDto) {
		return false;
	}
	
	
}
