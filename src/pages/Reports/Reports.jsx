/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Card, Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import moment from 'moment';

const tableData = [
  {
    key: '3',
    postId: '3',
    postTitle: `성희롱 ${moment().format('YYYY.MM.DD')} 커맨트 ㄱㄴㄷㄹ`,
    postAuthor: 'user123',
    postDate: `${moment().format('YYYY.MM.DD')}`,
    postReplyCount: 0,
    postLikeCount: 0,
  },
  {
    key: '2',
    postId: '2',
    postTitle: `폭력 언어 ${moment().format('YYYY.MM.DD')} 테스트 1223`,
    postAuthor: 'user123',
    postDate: `${moment()
      .add(1, 'd')
      .format('YYYY.MM.DD')}`,
    postReplyCount: 3,
    postLikeCount: 13,
  },
  {
    key: '1',
    postId: '1',
    postTitle: `사진 도용 ${moment().format('YYYY.MM.DD')} 하나둘셋`,
    postAuthor: '관리자',
    postDate: `${moment().format('YYYY.MM.DD')}`,
    postReplyCount: 0,
    postLikeCount: 41,
  },
];

class Reports extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      searchText: '',
    };

    this.getColumnSearchProps = this.getColumnSearchProps.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const tableColumns = [
      {
        title: '글 번호',
        dataIndex: 'postId',
        key: 'postId',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.postId - b.postId,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: '제목',
        dataIndex: 'postTitle',
        key: 'postTitle',
        ...this.getColumnSearchProps('postTitle'),
      },
      {
        title: '작성자',
        dataIndex: 'postAuthor',
        key: 'postAuthor',
      },
      {
        title: '작성일',
        dataIndex: 'postDate',
        key: 'postDate',
        sorter: (a, b) => new Date(a.postDate) - new Date(b.postDate),
      },
      // {
      //   title: '댓글',
      //   dataIndex: 'postReplyCount',
      //   key: 'postReplyCount',
      //   sorter: (a, b) => a.postReplyCount - b.postReplyCount,
      // },
      // {
      //   title: '좋아요',
      //   dataIndex: 'postLikeCount',
      //   key: 'postLikeCount',
      //   sorter: (a, b) => a.postLikeCount - b.postLikeCount,
      // },
    ];
    return (
      <Card title="Reports">
        <div>Add search on the userId</div>
        <Table
          dataSource={tableData}
          columns={tableColumns}
          pagination={{
            pageSize: 30,
          }}
          loading={false}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.props.history.push('/posts/details');
              }, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {}, // right button click row
              onMouseEnter: event => {}, // mouse enter row
              onMouseLeave: event => {}, // mouse leave row
            };
          }}
          // rowKey="uid"
        />
      </Card>
    );
  }
}

export default Reports;
