

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'scA0';

          let args: any = [];

          const screens = [
            

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"scA0",

          styles:[`{
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#050333",
  padding: "20px",
}`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
}`],

            functions:[()=>{}],            childrenItems:[() => {
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [mensagemErro, setMensagemErro] = React.useState("");
  const handleLogin = () => {
    if (!userName.trim()) {
      setMensagemErro("O nome de usuário precisa ser preenchido.");
      return;
    }
    if (!userPassword.trim()) {
      setMensagemErro("A senha precisa ser preenchida.");
      return;
    }

    setMensagemErro("");
    console.log("Login realizado com sucesso!");
  };

  return (
    <RN.View
      style={{
        padding: 20,
        alignItems: "stretch",
        justifyContent: "center",
      }}
    >
      <RN.TextInput
        placeholder="Nome de usuário"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
        value={userName}
        onChangeText={setUserName}
      />

      <RN.TextInput
        placeholder="Senha"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 8,
          marginBottom: 10,
        }}
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />

      {mensagemErro !== "" && (
        <RN.Text
          style={{
            color: "red",
            marginBottom: 10,
          }}
        >
          {mensagemErro}
        </RN.Text>
      )}

      <RN.Pressable
        style={{
          backgroundColor: "#007BFF",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={handleLogin}
      >
        <RN.Text
          style={{
            color: "#FFFFFF",
            fontSize: 16,
          }}
        >
          Login
        </RN.Text>
      </RN.Pressable>
    </RN.View>
  );
}],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "#0064fe" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1", check: false},{name: "Task 2", check: false}] } 
, 
'name': "Name:", 
'dataToSet': {name: "Carlos", phone: "1111"}, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
  appId: "1:750912250366:web:4629eac789a718a74220af"
} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            ()=>{}
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
