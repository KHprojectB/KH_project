package com.myhome.web.login.model;

import java.util.Date;
import java.util.Objects;

public class UserDTO2 {
	private String id;
	private String pwd;
	private String name;
	private String email;
	private Date birth;
	private String pNum;
	
	public UserDTO2() {}
	
	public UserDTO2(String id, String pwd, String name
					, String email, Date birth,String pNum) {
		this.id = id;
		this.pwd = pwd;
		this.name = name;
		this.email = email;
		this.birth = birth;
		this.pNum = pNum;
	}
	
	public String getId() {
		return id;
	}
	
	public void setId(String id) {
		this.id = id;
	}
	
	public String getPwd() {
		return pwd;
	}
	
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Date getBirth() {
		return birth;
	}
	
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	
	public String getpNum() {
		return pNum;
	}
	
	public void setpNum(String pNum) {
		this.pNum = pNum;
	}
	
	@Override
	public String toString() {
		return "UserDTO2 [id=" + id + ", pwd=" + pwd + ", name=" + name + ", email=" + email + ", birth=" + birth
				+ ", pNum=" + pNum + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(birth, email, id, name, pNum, pwd);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserDTO2 userDto2 = (UserDTO2) obj;
		return Objects.equals(birth, userDto2.birth) && Objects.equals(email, userDto2.email) && Objects.equals(id, userDto2.id)
				&& Objects.equals(name, userDto2.name) && Objects.equals(pNum, userDto2.pNum)
				&& Objects.equals(pwd, userDto2.pwd);
	}
	
}
