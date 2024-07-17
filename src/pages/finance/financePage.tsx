import PartnerList from "../../components/finance-project/PartnerList"

const FinancePage = () => {
    return (
        <div className=" border rounded-lg p-6" style={{ height: 'calc(94vh - 88px)' }}>
            <h1 className="text-3xl font-semibold mb-6 text-center md:text-start text-slate-500">Our Partners</h1>
            <PartnerList />
        </div>
    )
}
export default FinancePage