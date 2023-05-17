import { useEffect, useState } from "react";

export function Main() {

    const [role, setRole] = useState('');

    useEffect(() => {
        let arr = ["Developer", "FreeLancer", "Designer"];
        let a = 0;
        const interval = setInterval(() => {
            setRole(arr[a]);
            if (a === arr.length - 1) {
                a = 0;
            }
            else {
                a = a + 1;
            }
        }, 2000)
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center text-white main">
            <h1 className="font">SUNILKUMAR NAMALA</h1>
            <h3 className="font-2">I'm a {role} </h3>
        </div>
    );
}