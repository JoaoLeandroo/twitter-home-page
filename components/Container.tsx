interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return ( 
        <div className="max-w-[1920px] mx-auto px-5 sm:px-36">
            {children}
        </div>
     );
}
 
export default Container;