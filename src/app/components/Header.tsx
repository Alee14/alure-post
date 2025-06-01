interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({title, description}: HeaderProps) => {
    return (
        <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-700 bg-blend-multiply">
            <div className="md:px-40 px-10 max-w-screen-xl text-left py-24 lg:py-10 space-y-3">
                <h1 className="font-medium text-4xl">{title}</h1>
                <h2 className="font-light text-lg">{description}</h2>
            </div>
        </div>
    )
}

export default Header;