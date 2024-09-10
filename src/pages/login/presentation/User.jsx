import UserViewModel from '../view_model/User_viewModel'

export const User = () =>{
const {name, lastName, setLastName,changeName} = UserViewModel()

return(
    <>
    <p>{name} {lastName}</p>
    <button onClick={changeName}>Cambios</button>
    </>
)


}

