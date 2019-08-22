import React from 'react';

import {
  Card,
  Icon,
  Row,
  Col,
  Popover,
  Button,
  Divider,
  Tree
} from 'antd';
const { Meta } = Card;
const { TreeNode } = Tree;

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

const data = [
  {
    id: 1,
    title: "Card title",
    description: "This is the description This is the description This is the description"
  },
  {
    id: 2,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 3,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 4,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 5,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 6,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 7,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 8,
    title: "Card title",
    description: "This is the description"
  },
  {
    id: 9,
    title: "Card title",
    description: "This is the description"
  }
]


class Dashboard extends React.Component {
  state = {
    visible: false,
    disabled: false,

    expandedKeys: ['0-0-0', '0-0-1'],
    autoExpandParent: true,
    checkedKeys: ['0-0-0'],
    selectedKeys: [],
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };


  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} />;
    });


  render () {
    const { disabled } = this.state;
    return (
      <div style = {{padding: "15px 100px", background: "#fff"}}>
        <div>
          <Button onClick={this.toggle} style = {{float: "right"}}>
            <Icon type={disabled ? "menu-unfold" : "menu-fold"} />
          </Button>
          <Divider />
          {/* <div className={disabled ? "left-side animated" : "left-side-first animated"} ></div> */}

          <div className={disabled ? "right-side animated" : "right-side-first animated"}>
            <Row>
            <Tree
                checkable
                onExpand={this.onExpand}
                expandedKeys={this.state.expandedKeys}
                autoExpandParent={this.state.autoExpandParent}
                onCheck={this.onCheck}
                checkedKeys={this.state.checkedKeys}
                onSelect={this.onSelect}
                selectedKeys={this.state.selectedKeys}
              >
                {this.renderTreeNodes(treeData)}
              </Tree>
            </Row>
          </div>
        </div>

        <Row gutter={16} type="flex" justify="space-around" align="middle">
          {
            data.map(i => {
              return <Col className = "card-items" span={8} key={i.id} style = {{paddingBottom: "16px"}}>
                <Card
                  actions={[
                  <Icon type="setting" />, 
                  <Icon type="edit" />, 
                  <Popover
                    content={<a onClick={this.hide}>Close</a>}
                    title="Title"
                    trigger="click"
                  >
                    <Icon type="ellipsis" />
                  </Popover>]}
                >
                  <Meta
                    title= {i.title}
                    description= {i.description}
                  />
                </Card>
              </Col>
            })
          }
        </Row>
      </div>
    );
  }
};


export default Dashboard;
