<template>
    <!-- 顾客管理页面 -->
    <div class="customer">
       <div class="btns">
           <el-row>
            <el-col :span="12">
                <!-- 搜索框 -->
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item >
                    <el-input size="small" v-model="formInline.keywords" placeholder="关键字"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="searchHandler" size="small">查询</el-button>
                </el-form-item>
                </el-form>
                <!-- /搜索框 -->
            </el-col>
            <el-col :span="12" style="text-align:right">
                <!-- 按钮 -->
                <el-button type="primary" size="small" @click="toAddHandler">添加</el-button>
                <el-button type="danger" size="small" @click="toBatchDeleteHandler">批量删除</el-button>
                <!-- /按钮 -->
            </el-col>
        </el-row>
       </div>
       <!--  表格-->
       <div class="tbls">
           <el-table
           v-loading="loading"
            :data="tableData"
            style="width: 100%"
            size="small"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
                prop="username"
                label="用户名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="realname"
                label="真实姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="telephone"
                label="手机号">
            </el-table-column>
            <el-table-column
                prop="enabled"
                label="状态">
            </el-table-column>
             <el-table-column
                label="操作">
                <template v-slot:default="slot">
                    <a href="" @click.prevent="toDeleteHandler(slot.row.id)">删除</a>&nbsp;&nbsp;
                    <a href="" @click.prevent="toUpdataHandler(slot.row)">修改</a>&nbsp;&nbsp;
                </template>
            </el-table-column>
            </el-table>
            <!-- 分页 -->
            <div style="margin-top:.5em;text-align:right">
                <el-pagination
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
            <!--  /分页-->
       </div>
       <!-- /表格 -->
       <!--  模态框-->
       <div>
           <el-dialog title="顾客管理" :visible.sync="dialogFormVisible" @close="closeDialog">
            <el-form :model="form">
                {{form}}
                <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.realname" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input v-model="form.telephone" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog" size="small">取 消</el-button>
                <el-button type="primary" @click="submitHandler" size="small">确 定</el-button>
            </div>
            </el-dialog>
       </div>
       <!--  /模态框-->
    </div>
</template>

<script>
import $ from 'jquery'
import qs from 'qs'
export default {
    data(){
        return{
            name:"customer",
            tableData:[   
            ],
            ids:[],
            //模态框变量
            dialogFormVisible:false,
            form:{},
            formLabelWidth: '120px',
            loading:false,
            formInline:{}

        }
        
    },
    created(){
            this.reloadData();
        },
    methods:{
        //去添加
        toAddHandler(){
            this.form={};
            this.dialogFormVisible=true;
        },
        //去批量删除
        toBatchDeleteHandler(){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let url="http://134.175.100.63:6677/customer/batchDelete";
            //手动将数组转换为查询字符串
            let params=qs.stringify({ids:this.ids},{arrayFormat:'repeat'});
            alert(params);
            $.post(url,params,(result)=>{
                this.reloadData();
                this.$notify({
                    title:'成功',
                    message:result.message,
                    type:'success'
                })
            })
        });
        },
        //去删除
        toDeleteHandler(id){
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let url="http://134.175.100.63:6677/customer/deleteById";
            $.get(url,{id},(result)=>{
                this.reloadData();
                this.$notify({
                    title:'成功',
                    message:result.message,
                    type:'success'
                })
            })
        });
        
        
        },
        //去修改
        toUpdataHandler(row){
            this.dialogFormVisible=true;
            this.form=row;
        },
        //重载数据
        reloadData(){
            var url="http://134.175.100.63:6677/customer/findAll";
            this.loading=true;
            $.get(url,(result)=>{
                this.tableData=result.data
                this.loading=false
            })
        },
        //复选按钮选中时
        handleSelectionChange(val){
            this.ids=val.map(item=>item.id);
        },
        //模态框关闭方法
        closeDialog(){
            this.dialogFormVisible=false
        },
        //模态框确认,保存顾客信息方法
        submitHandler(){
             var url="http://134.175.100.63:6677/customer/saveOrUpdate";
             $.post(url,this.form,(result)=>{
                 this.$message({
          message: result.message,
          type: 'success'
        });
                 this.closeDialog();
                 this.reloadData();
             })
        }

    }
}
</script>
<style scoped>

</style>