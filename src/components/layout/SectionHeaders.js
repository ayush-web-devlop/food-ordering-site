export default function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <h3 className="text-gray-500 font-semibold leading-3">{subHeader}</h3>
            
            <h1 className="text-red-500 font-bold text-4xl">{mainHeader}</h1>
        </>
    );
}