import { UserInfoContext } from "../contexts/UserInfoContext";
import UserInfoComponent from "./UserInfoComponent";
import UserInfoContextComponent from "./UserInfoContextComponent";

const SectionContextComponent = ({ message, children, hasChildSection, level}) => {

    if (hasChildSection && level < 5) {
        return (
            <section className="section-class">
                {/*<h1>Before the children: </h1>*/}
                <p>{message}</p>
                <p>Section level: {level}</p>
                <SectionContextComponent 
                    message={message} 
                    hasChildSection={true} 
                    level={level + 1}
                />
                {children}
                {/*<h1>After the children</h1>*/}
            </section>
        )
    }
    return (
        <>
            <p>Section level: {level}</p>
            <UserInfoContextComponent></UserInfoContextComponent>
        </>
    )

}

export default SectionContextComponent;