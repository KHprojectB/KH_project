package com.myhome.web;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.myhome.web.login.model.UserDTO;


	public class UserValidator implements Validator {
		@Override
		public boolean supports(Class<?> clazz) {
//			return User.class.equals(clazz); // 검증하려는 객체가 User타입인지 확인
			return UserDTO.class.isAssignableFrom(clazz); // clazz가 User 또는 그 자손인지 확인
		}

		@Override
		public void validate(Object target, Errors errors) { 
			System.out.println("LocalValidator.validate() is called");

			UserDTO userDto = (UserDTO)target;
			
			String id = userDto.getId();
			
	//		if(id==null || "".equals(id.trim())) {
	//			errors.rejectValue("id", "required");
	//		}
			ValidationUtils.rejectIfEmptyOrWhitespace(errors, "id",  "required");
			ValidationUtils.rejectIfEmptyOrWhitespace(errors, "pwd", "required");
			
			if(id==null || id.length() <  5 || id.length() > 12) {
				errors.rejectValue("id", "invalidLength");
			}
		}
	}