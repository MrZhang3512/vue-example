import Vue from 'vue'
import { 
    Pagination,
    Button ,
    Alert,
    Table,
    TableColumn,
    Form,
    FormItem,
    Row,
    Col,
    Container,
    Header,
    Aside,
    Footer,
    Main, 
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
    Dialog,
    Input,
    Select,
    Option,
    Loading,
    Message,
    MessageBox,
    Notification
} from 'element-ui'
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Alert)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.$loading=Loading.service;
Vue.prototype.$msgbox=MessageBox;
Vue.prototype.$alert=MessageBox.alert;
Vue.prototype.$confirm=MessageBox.confirm;
Vue.prototype.$prompt=MessageBox.prompt;
Vue.prototype.$notify=Notification;
Vue.prototype.$message=Message;












