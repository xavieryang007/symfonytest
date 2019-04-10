<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Title">
            <el-input v-model="form.title" maxlength="150"></el-input>
        </el-form-item>
        <el-form-item label="Url">
            <el-input v-model="form.url" @blur="urlCheck()"></el-input>
        </el-form-item>
        <el-form-item label="Tags">
            <el-col :span="11">
                <el-select
                        v-model="form.tags"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="Please select the article TAB">
                    <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="Date">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="Choose Date" v-model="form.date"
                                style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="Text">
            <vue-editor v-model="form.text" :editorOptions="editorOptions"></vue-editor>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import Api from "../api/Api";
    import { VueEditor } from "vue2-editor";
    export default {
        name: "New",
        data() {
            return {
                form: {
                    title: '',
                    tags: [],
                    date: '',
                    url: '',
                    text: '',
                },
                options5: [],
                value10: [],
                rules: {
                    title: [
                        {required: true, message: 'Please enter your title', trigger: 'blur'},
                    ],
                    date: [
                        {required: true, message: 'Please enter your date', trigger: 'blur'},
                    ],
                    url: [
                        {required: true, message: 'Please enter your url', trigger: 'blur'},
                    ],
                    text: [
                        {required: true, message: 'Please enter your text', trigger: 'blur'},
                    ]
                },
                editorOptions:{
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'font': [] }],
                        [{ 'align': [] }],
                        ['clean']
                    ],
                    imageDrop: false,
                    imageResize: {}
                },
            }
        },
        components: {
            VueEditor
        },
        methods: {
            onSubmit() {
                let vm=this
                Api.add(this.form,function (req) {
                    vm.$message(req.data.messages);
                    this.$router.push("/list");
                });
            },
            urlCheck() {
                let url = this.form.url;
                let vm = this;
                Api.checkUrl(url, function (req) {
                    if (req.status == 200) {
                        let code = req.data.code;
                        if (code == 400) {
                            vm.$message("URL duplicate, please enter again");
                        }
                    }
                })
            },
        }
    }
</script>