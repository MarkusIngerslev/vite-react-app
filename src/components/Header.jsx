export default function Header(props) {
    return (
      <header>
        <p>Hej {props.name}!</p>
        <ul style={{listStyleType: "none", marginLeft: "0px"}}>
          <li>Brugernavn: {props.userName}</li>
          <li>Email: {props.email}</li>
          <li>Age: {props.age}</li>
        </ul>
      </header>
    )
  }