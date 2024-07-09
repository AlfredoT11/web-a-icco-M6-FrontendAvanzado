import UserInfoComponent from "./UserInfoComponent";

const SectionComponent = ({ message, children, hasChildSection, level, username, fullname }) => {

    if (hasChildSection && level < 5) {
        return (
            <section className="section-class">
                {/*<h1>Before the children: </h1>*/}
                <p>{message}</p>
                <p>Section level: {level}</p>
                <SectionComponent 
                    message={message} 
                    hasChildSection={true} 
                    level={level + 1} 
                    username={username}
                    fullname={fullname}
                />
                {children}
                {/*<h1>After the children</h1>*/}
            </section>
        )
    }
    return (
        <>
            <p>Section level: {level}</p>
            <UserInfoComponent username={username} fullname={fullname} ></UserInfoComponent>
        </>
    )

}

export default SectionComponent;