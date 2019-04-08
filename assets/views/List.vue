<template>
    <div>
        <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                    label="Date"
                    width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="Title"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.title }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="UpdateTime"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.update_time }}</span>
                </template>
            </el-table-column>
            <el-table-column
                    label="View Times"
                    width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.rate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Operation" width="500">
                <template slot-scope="scope">
                    <el-switch
                            v-model="scope.row.status"
                            active-text="enable"
                            inactive-text="disenable"  @click.native="switchChange(scope.$index, scope.row)">
                    </el-switch>
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">Edit
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentChange"
                :page-size="2"
                :current-page="currentPageNum"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import Api from "../api/Api";

    export default {
        name: "List",
        data() {
            return {
                tableData: [],
                total: 0,
                currentPageNum: 1,
            }
        },
        created() {
            let vm = this;
            Api.getList(0, function (req) {
                vm.tableData = req.data.data.lists;
                vm.total = parseInt(req.data.data.total);
            });
        },
        methods: {
            handleEdit(index, row) {
                this.$router.push({
                    path:'/edit',
                    query:{
                        id:row.id
                    }
                })
            },
            handleDelete(index, row) {
                let vm = this;
                Api.delete(row.id, function (req) {
                    if (req.status == 200) {
                        Api.getList(0, function (reqs) {
                            vm.tableData = reqs.data.data.lists;
                            vm.total = parseInt(reqs.data.data.total);
                            vm.currentPageNum = 0;
                        });
                    }
                });
            },
            currentChange(page) {
                let vm = this;
                let _currentPageNum = page - 1
                Api.getList(_currentPageNum, function (req) {
                    vm.tableData = req.data.data.lists;
                    vm.total = parseInt(req.data.data.total);
                });
            },
            switchChange(index,row) {
                console.log(row)
                Api.enable(row.id, function (req) {
                    vm.$message(req.data.messages);
                });
            }
        }
    }
</script>