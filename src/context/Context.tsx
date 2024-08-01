import React from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import Loader from "../components/ui/loader";

export const AppContext = React.createContext<any>({});

export const AppProvider = ({ children }: any) => {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<any>({});
    const [Notifications, setNotifications] = React.useState<any>([]);

    const toast = useToast();

    function setData(data: any) {
        setDataForUser({
            Id: data.Id,
            Token: data.Token,
            Session: data.Session,
            Name: data.result.Name,
            Email: data.result.Email,
            Roles: data.result.Roles,
            Currency: data.result.Currency,
            Phone: data.result.Phone,
            PCode: data.result.PCode
        });
    }


    const setDataForUser = React.useMemo(() => (data: any) => {
        setUser({
            Id: data.Id,
            Token: data.Token,
            Session: data.Session,
            Name: data.Name,
            Email: data.Email,
            Roles: data.Roles,
            Currency: data.Currency,
            Phone: data.Phone,
            PCode: data.PCode
        });
        localStorage.setItem("user", JSON.stringify(data));
        setUserCookie(data);
    }, []);

    function setUserCookie(data: any) {
        // 7 day expire
        const date = new Date();
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
        document.cookie = `Id=${JSON.stringify(
            data.Id
        )}; expires=${date.toUTCString()}; path=/`;
        document.cookie = `Token=${JSON.stringify(
            data.Token
        )}; expires=${date.toUTCString()}; path=/`;
        document.cookie = `Email=${JSON.stringify(
            data.Email
        )}; expires=${date.toUTCString()}; path=/`;
        document.cookie = `Session=${JSON.stringify(
            data.Session
        )}; expires=${date.toUTCString()}; path=/`;
        document.cookie = `Name=${JSON.stringify(
            data.Name
        )}; expires=${date.toUTCString()}; path=/`;
    }

    const fetchUserDetails = React.useCallback(async () => {
        setLoading(true);
        try {
            let user = JSON.parse(localStorage.getItem("user") || "{}");

            if (user.Id === undefined) {
                user = {
                    Id: JSON.parse(
                        document.cookie.replace(
                            /(?:(?:^|.*;\s*)Id\s*=\s*([^;]*).*$)|^.*$/,
                            "$1"
                        )
                    ),
                    Token: JSON.parse(
                        document.cookie.replace(
                            /(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/,
                            "$1"
                        )
                    ),
                    Email: JSON.parse(
                        document.cookie.replace(
                            /(?:(?:^|.*;\s*)Email\s*=\s*([^;]*).*$)|^.*$/,
                            "$1"
                        )
                    ),
                    Session: JSON.parse(
                        document.cookie.replace(
                            /(?:(?:^|.*;\s*)Session\s*=\s*([^;]*).*$)|^.*$/,
                            "$1"
                        )
                    ),
                    Name: JSON.parse(
                        document.cookie.replace(
                            /(?:(?:^|.*;\s*)Name\s*=\s*([^;]*).*$)|^.*$/,
                            "$1"
                        )
                    ),

                };
            }

            if (
                user.Id === undefined ||
                user.Id === "" ||
                user.Id === null ||
                user.Token === undefined ||
                user.Token === "" ||
                user.Token === null ||
                user.Session === undefined ||
                user.Session === "" ||
                user.Session === null
            ) {
                const currentUrl = window.location.pathname;
                if (currentUrl !== "/") navigate("/");
                Logout();
                return;
            }
            else {
                // const currentUrl = window.location.pathname;
                // // if (currentUrl === "/" || currentUrl === "/") navigate("/dashboard");
                // // else navigate(currentUrl);
            }

            setDataForUser(user);
        } catch (err) {
            Logout();
            navigate("/");
        }

        setLoading(false);
    }, [setDataForUser, navigate]);

    function raiseToast(title: string, status: string, message?: string) {
        toast({
            title: title,
            description: message || "",
            status: status as any,
            duration: 5000,
            isClosable: true,
            position: "bottom-left",
        });
    }

    function Logout() {
        // document.cookie = "ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // document.cookie =
        //     "Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // document.cookie = "Email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // document.cookie =
        //     "Session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // document.cookie = "Name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // localStorage.clear();
        // sessionStorage.clear();
        // setUser({});
    }



    React.useEffect(() => {
        fetchUserDetails();
    }, [fetchUserDetails]);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                setData,
                Logout,
                setLoading,
                loading,
                fetchUserDetails,
                raiseToast,
                Notifications,
                setNotifications,
            }}
        >
            {children}
            {loading && <Loader />}
        </AppContext.Provider>
    );
};

export default AppProvider;
