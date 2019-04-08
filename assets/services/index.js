/**
 * Created by xavier on 2019/4/5.
 */

export default {
    checkLogin() {
        let token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    },
    updateToken(token){
        localStorage.setItem("token",token);
    }
}
