const DashboardHeader: React.FC = () => {
    return <>
        <div className="flex gap-2 flex-col md:flex-row">
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%]">
                <div>
                    <p className="text-sm font-medium">Shortlisted Inspiration</p>
                    <h1 className="text-2xl text-[#23262F]">Style Quiz</h1>
                </div>
                <img src='Frame.png' className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%]">
                <div>
                    <p className="text-sm font-medium">My design</p>
                    <h1 className="text-2xl text-[#479E82]">5672</h1>
                </div>
                <img src='Frame2.png' className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%]">
                <div>
                    <p className="text-sm font-medium">Upload design & document</p>
                    <h1 className="text-2xl text-[#5171E4]">5672</h1>
                </div>
                <img src='Frame3.png' className="w-10 h-10" />
            </div>
            <div className="flex justify-between items-center border rounded-lg px-4 py-4 md:w-[25%]">
                <div>
                    <p className="text-sm font-medium">Project Status</p>
                    <h1 className="text-2xl text-[#EF466F]">5672</h1>
                </div>
                <img src='Frame4.png' className="w-10 h-10" />
            </div>
        </div>
    </>
}
export default DashboardHeader;