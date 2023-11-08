import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    e.target.innerHTML = "Send";
    console.log("odpalony przycick");
    navigate("/");
  };
  return (
    <div>
      <h1>Kontakt</h1>
      <button onClick={onClickHandler}>Wyslij</button>
    </div>
  );
}

export default Contact;
