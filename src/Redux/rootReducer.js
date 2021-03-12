

const initState = {
    isLoggedin: false,
    users:[ {firstname:"Ayushi",
            lastname:"Sharma",
            email:"ayu@gm",
            password:'A123'},
            {firstname:"Mahak",
            lastname:"Sharma",
            email:"mhk@gm",
            password:'A321'}],
    activeUser: {firstname:"",
    lastname:"",
    email:"",
    password:""}
}
const rootReducer = (state=initState , action) => {

    switch(action.type)
    {
            case "DOSIGNIN":
                {
                   
                    for(let user of state.users)
                    {
                        
                        if(user.email === action.email && user.password === action.password)
                        {
                            return {...state,isLoggedin:true,activeUser:user}
                        }
                    }
					break;
                    /* falls through */
                }

            case "DOREGISTER":
                {
                    let user = [...state.users];
                    user.push(action.payload)
                    return {isLoggedin:true,users:user,activeUser:action.payload}
                    /* falls through */
                }
            case "LOGOUT":
                {
                    
                    return {...state,isLoggedin:false}
                    /* falls through */
                }
            default:
                return state
    }


}
export default rootReducer