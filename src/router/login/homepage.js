import ownerRouter from '../baseInfo/ownerRouter'
import partnerRouter from '../baseInfo/partnerRouter'
import categoryRouter from "../baseInfo/categoryRouter";
import areaRouter from '../baseInfo/storageAreaRouter'
import locationRouter from '../baseInfo/locationRouter'
import productRouter from '../baseInfo/productInfoRouter'
import inboundRouter from '../inStockManage/inboundRouter'
import putawayRouter from '../inStockManage/putawayRouter'
import outboundRouter from '../outStockManage/outboundRouter'
import waveRouter from '../waveManage/waveManageRouter'
import seedRouter from '../seedManage/seedManageRouter'
import storeReportRouter from '../storeReport/storeReportRouter'
import inventoryCheckRouter from '../inventoryCheck/inventoryCheckRouter'
import warehouseRouter from '../warehouseManage/warehouseRouter'
import servicerRouter from '../servicerManage/servicerRouter'
import accountRouter from '../accountSetting/accountRouter'
import subCompanyRouter from "../baseInfo/subCompanyRouter"
import userManageListRouter from "../userManage/userManageListRouter";
import inventoryOutboundRouter from "../inventoryInOrOutbound/inventoryOutboundRouter";
import sortPickRouter from "../sortGroupPick/sortPickRouter"
import replenishmentRouter from "../replenishment/replenishmentRouter";
import sortReplenishRouter from "../sortGroupReplenish/sortReplenishRouter"
import storeTransRouter from "../storeTransManager/storeTransRouter"
import printRouter from '../printSchema/printRouter'
// import convertOrderRouter from "../convertOrder/convertOrderRouter"
import processOrderRouter from "../processOrder/processOrderRouter"
import sysManageRouter from "../sysManage/sysManageRouter";
import workbenchRouter from '../workbench/workbenchRouter'
import reportManagerRouter from "../storeReportManger/reportManagerRouter";
import zhzgInboundApply from '../zhzgInboundApply/zhzgInbounApply'
import productAssociation from '../productAssociation/productAssociation'
import salesAreaRouter from "../salesArea/SalesAreaRouter";
import wayBill from '../wayBill/wayBill'
import attendance from '../attendance/attendance'
import forbidden from '../forbidden/forbidden'
import adminUserRouter from '../adminUser/adminUserRouter'
import vehicleManageRouter from '../vehicleManage/vehicleManageRouter'
import transAreaRouter from '../transAreaManage/transAreaRouter'
import logisticsTraceRouter from '../logisticsTraceManage/logisticsTraceRouter'
import auditLogRouter from '../auditManage/auditLogRouter'
import orderManageRouter from '../orderManage/orderManageRouter'
import erpConfigRouter from '../integrateConfig/erpConfigRouter'
import eorderConfigRouter from '../eorderConfig/eorderConfigRouter'
import receivables from '../receivables/receivablesRouter'
import registerCodeRouter from '../registerCodeManager/registerCodeRouter'
import assetManage from '../assetManage/assetManage'
import orderConfirmRouter from '../orderConfirm/orderConfirmRouter'
import visualLocationRouter from '../visualLocationRouter/visualLocationRouter'
import transferOrderRouter from '../transferOrderManage/transferOrderRouter'
import productLocationRoute from '../productLocation/productLocationRoute'
import exception from '../exception/exceptionRouter'
import surveillanceRouter from '../videoSurveillance/surveillanceRouter'
import customerConfigRoute from '../customerConfig/customerConfigRoute'
import breakProductRouter from '../breakProduct/breakProductRouter'
import scriptManageRouter from '../scriptManage/scriptManageRouter'
import businessCheckRouter from '../businessCheck/businessCheckRouter'
import messageManageRouter from '../messageManage/messageManageRouter'
import groupBusinessRouter from '../groupBusiness/groupBusinessRouter'

const home = () => import('pages/homepage')

const homeRouter = [
    {
        path: "/homepage",
        name: 'homepage',
        meta: {
            title:'首页'
        },
        title: '首页',
        component: home,
        children:[
            ...ownerRouter,
            ...partnerRouter,
            ...categoryRouter,
            ...areaRouter,
            ...locationRouter,
            ...productRouter,
            ...inboundRouter,
            ...putawayRouter,
            ...outboundRouter,
            ...waveRouter,
            ...seedRouter,
            ...storeReportRouter,
            ...inventoryCheckRouter,
            ...warehouseRouter,
            ...servicerRouter,
            ...accountRouter,
            ...subCompanyRouter,
            ...userManageListRouter,
            ...inventoryOutboundRouter,
            ...sortPickRouter,
            ...replenishmentRouter,
            ...sortReplenishRouter,
            ...storeTransRouter,
            // ...convertOrderRouter,
            ...processOrderRouter,
            ...printRouter,
            ...sysManageRouter,
            ...workbenchRouter,
            ...reportManagerRouter,
            ...zhzgInboundApply,
            ...productAssociation,
            ...salesAreaRouter,
            ...wayBill,
            ...attendance,
            ...forbidden,
            ...adminUserRouter,
            ...vehicleManageRouter,
            ...transAreaRouter,
            ...logisticsTraceRouter,
            ...auditLogRouter,
            ...orderManageRouter,
            ...erpConfigRouter,
            ...eorderConfigRouter,
            ...receivables,
            ...registerCodeRouter,
            ...assetManage,
            ...orderConfirmRouter,
            ...visualLocationRouter,
            ...transferOrderRouter,
            ...productLocationRoute,
            ...exception,
            ...surveillanceRouter,
            ...customerConfigRoute,
            ...breakProductRouter,
            ...scriptManageRouter,
            ...businessCheckRouter,
            ...messageManageRouter,
            ...groupBusinessRouter
        ]
    },
]

export default homeRouter;