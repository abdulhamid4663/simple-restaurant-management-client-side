import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { toast } from "react-toastify";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})

const useAxios = () => {
    const { logoutUser } = useAuth();

    useEffect(() => {
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                console.log("Dead");
                logoutUser()
                    .then(() => {
                        toast.warning("Please login again")
                    })
            }
        });
    }, []);


    return instance
};

export default useAxios;