import CardUser from "./components/User";
import UserPhoto01 from "./assets/user-01.jpg";
import UserPhoto02 from "./assets/user-02.jpg";
import UserPhoto03 from "./assets/user-03.jpg";

export default function App() {
  return (
    <>
      {/*       <CardUser
        photoUser={UserPhoto01}
        userName="Abadia da Silva"
        hardSkills="Fullstack Developer, React, Sass, Typescript"
        phoneNumber="+55(61)94567-1234"
        email="abadiadasilva@email.com"
      /> */}
      <CardUser
        photoUser={UserPhoto02}
        userName="João Mineiro"
        hardSkills="Pedreiro, Marceneiro, Pintor"
        phoneNumber="+55(61)98524-9876"
        email="mineirojoao@email.com"
        gitHub="https://github.com/abadia"
        linkedIn="https://www.linkedin.com/in/abadia/"
        instagram="https://www.linkedin.com/in/abadia/"
      />
    </>
  );
}
