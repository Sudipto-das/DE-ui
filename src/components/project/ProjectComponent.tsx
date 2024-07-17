const ProjectComponent = () => {
    return (
        <div className="flex items-center justify-center border rounded-lg" style={{ height: 'calc(94vh - 88px)' }}>
            <button className="px-6 py-4 text-xl font-bold bg-gradient-to-r from-green-700 to-blue-900 rounded-lg shadow-2xl text-slate-200 flex items-center justify-center">
                Create Project
            </button>
        </div>
    );
}

export default ProjectComponent;
