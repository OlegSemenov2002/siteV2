let users = [],profile={},userlog;
function addUser() {  //регистрация пользователя
	if(profile.login!=undefined){
		alert('вы уже вошли');
		return 0;
	}
	let enterName=prompt("Введите ваше имя"),
	enterSname=prompt("Введите вашу фамилию"),
	enterAge=prompt("Ваш возраст"),
	log=prompt("Желаемый логин");
	while(users.find(item=>item.login==log)!=undefined){
		alert("Логин уже занят, пожалуйста введите другой");
		log=prompt("Желаемый логин");
	}
	if(enterName!=''&&enterName!=null&&enterSname!=''&&enterSname!=null&&enterAge!=null&&enterAge!=''&&log!=null&&log!=''){
		profile ={
		login:log,
		id:users.length,
		name:enterName,
		sName:enterSname,
		messages:[],
		age:enterAge,
		Acess:true,

		};
		users.push(profile);		
		alert('Вы успешно зарегистрировались');
	}else alert("Вы не ввели данные");
};
function result(){  //вывод всех пользователей по очереди
	users.forEach(function(item){
		let{login,id,name,messages=0,sName,Acess,isAdmin="false"}=item;
		alert('login:'+login+'\nid:'+id+'\nname:'+name+'\nSname:'
			+sName+'\nmessages'+messages+'\nAcess:'+Acess+'\nAdmin:'+isAdmin);
	})
}
function login(){  //вход пользователя
	if(profile.login==undefined){
		userlog = prompt("Введите ваш логин");
	}else {alert("Ошибка, вы уже вошли как:"+profile.login); return};
	if(userlog!=''){
	 find = users.find(item=>item.login==userlog);
	};

	if(find!=-1&&find.login!=undefined){
		profile=find;
		alert("Вы успешно вошли как:"+profile.login);
	}else alert("Ошибка входа");
};
function unLog(){ //выход пользователя
	profile.Acess=false;
	profile={};
	alert("Вы вышли");
}
function checkData(){

	alert('login:'+profile.login+'\nname:'+profile.name+'\nSname:'
			+profile.sName+'\nmessages'+profile.messages.length);	
	if(profile.messages.length!=0){
		let check = confirm("У вас есть непрочитанные сообщения, хотели бы вы их увидеть?");
		if(check){
			let mes = profile.messages;
			for(let key of Object.values(profile.messages)){
				alert(key);
			}
		}
	}
}
function message(){
	let who = prompt("Введите login пользователя которому хоттите отправить сообщение");
	if(who!=''&&who!=null){
		find = users.find(item=>item.login==who);
		alert(find);
		{
			if(find==undefined){
				while(find==undefined){
					alert("Пользователя с таким логином не найдено, повторите попытку");
					let who = prompt("Введите login пользователя которому хоттите отправить сообщение");
					find = users.find(item=>item.login==who);
					if(find.login!=undefined){
						break;
					}
				}
			}
		}
	}else if(who==null)	return 0;

	
		let time = new Date();
		let message=prompt("Введите сообщение");
		let newMessage = time+'\n'+message+'\nОт:'+profile.name;
		if(message==''&&message!=null){ alert("Вы не ввели сообщение");
		}else{
			find.messages.push(newMessage);
		}
	

}



