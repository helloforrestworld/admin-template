<template>
  <section class="table-list">
    <h2 class="title">客户管理</h2>
    <section class="controler">
      <div class="controler-left">
        <el-button @click="resetDateFilter" type="primary">新建客户</el-button>
        <el-button @click="clearFilter">导入</el-button>
        <el-button @click="clearFilter">导出</el-button>
      </div>
      <div class="controler-right">
        <el-input placeholder="搜索客户名称" clearable v-model="keyword"></el-input>
      </div>
    </section>

    <section class="table-wrap">
      <el-table ref="filterTable" :data="tableData" style="width: 100%" height="100%">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        ></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <section class="pagi-wrap">
      <Pagination :total="100" :page="page" :limit="limit" @pagination="handlePageChange"></Pagination>
    </section>
  </section>
</template>

<script>
import Pagination from '@/components/Pagination/'
export default {
  data() {
    return {
      page: 1,
      limit: 10,
      keyword: '',
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }
      ]
    }
  },

  components: {
    Pagination
  },

  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      console.log('column: ', column)
      const property = column['property']
      return row[property] === value
    },
    handlePageChange({ page, limit }) {
      this.page = page
      this.limit = limit
    }
  }
}
</script>

<style scoped lang="less">
.table-list {
  width: 100%;
  height: 100%;

  .title {
    font-size: 18px;
    height: 30px;
    margin: 0 0 10px 0;
    font-weight: normal;
  }

  .controler {
    height: 40px;
    .controler-left {
      float: left;
    }
    .controler-right {
      float: right;
    }
  }

  .table-wrap {
    height: calc(100% - 170px);
  }

  .pagi-wrap {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
}
</style>
