import { useState } from "react";
import { getTokenAuth } from "../api/login";


const LoginScreen = () => {
  // const [formData, setFormData] = useState({
  // 	email: "",
  // 	password: "",
  // });
	const [errorMenssages, setErrorMenssages] = useState({});

  const renderErrorMessage = (name) => {
    name === errorMenssages.name && (
      <div className="text-red-600">
        <span>error {name} no existe...</span>
      </div>
    );
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
	const lala = await getTokenAuth()


	if(lala){
		console.log('tengo datos')
		console.log(lala)
	}else{
		console.log('No tengo datos');
	}
	
    // const { mail, pass } = document.forms[0];
    // const userData = database.find(
    //   (user) => user.email === mail.value && user.password === pass.value
    // );
    // // console.log(userData);
    // console.log(database);

    // if (userData) {
    //   console.log("TODO OK");
    // } else {
    //   console.log("EMAIL O CONTRASEÑA NO SON VALIDOS");
    // }
  };

  return (
    <div className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header className="flex flex-col">
          <h1 className="mx-auto mb-5 text-lg font-bold">Login</h1>
          <form onSubmit={handleSubmit}>
            <>
              <label className="block mb-2 text-indigo-500">Email</label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border border-indigo-500 outline-none focus:bg-gray-300 rounded-md"
                type="email"
                name="mail"
                required
              />
              {renderErrorMessage("email")}
            </>
            <>
              <label className="block mb-2 text-indigo-500">Password</label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border border-indigo-500 outline-none focus:bg-gray-300 rounded-md"
                type="password"
                name="pass"
                required
              />
              {renderErrorMessage("pass")}
            </>
            <>
              <input
                className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded cursor-pointer"
                type="submit"
              />
            </>
          </form>
        </header>
      </div>
      {/* <div className="bg-[url('https://fondosmil.com/fondo/88194.jpg')] bg-cover h-screen bg-no-repeat bg-center">
				<div class=" absolute inset-0 bg-black opacity-50"></div>
			</div>
			<h1 className="absolute left-0 right-0 top-0 bottom-0 m-auto">Login Screen</h1> */}
    </div>
  );
};

export default LoginScreen;
