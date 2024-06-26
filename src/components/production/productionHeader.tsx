const ProductionHeader: React.FC = () => {
    return <>
        <div className="flex gap-2">
            <div className="flex justify-between items-center border rounded-lg px-4 py-5 w-[25%]">
                <div>
                    
                    <h1 className="text-xl text-[#23262F] font-medium">Factories</h1>
                </div>
                <img src='Frame.png' className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 w-[25%]">
                <div>
                    
                    <h1 className="text-xl text-[#23262F] font-medium">False ceiling</h1>
                </div>
                <img src='Frame2.png' className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 w-[25%]">
                <div>
                   
                    <h1 className="text-xl text-[#23262F] font-medium">Painting</h1>
                </div>
                <img src='Frame3.png' className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 w-[25%]">
                <div>
                    
                    <h1 className="text-xl text-[#23262F] font-medium">Loose Furniture</h1>
                </div>
                <img src='Frame4.png' className="w-10 h-10" />
            </div>
        </div>
    </>
}
export default ProductionHeader;