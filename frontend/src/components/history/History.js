import React, { Component } from 'react';
import Table from 'rc-table';

import Api from '../../Api';

import 'rc-table/assets/index.css';
import 'rc-table/assets/animation.css';
import styles from '../manage/manage.scss';
import '../home/modal.css'

const api = Api()

export default class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizzes: [{}]
    }
    this.getAll = this.getAll.bind(this)
    this.columns = [
      { title: 'Id', dataIndex: 'id', key: 'id', width: 100 },
      { title: 'Student Name', dataIndex: 'student_name', key: 'student_name', width: 250 },
      { title: 'Class Name', dataIndex: 'class_name', key: 'class_name', width: 250 },
      { title: 'Subject', dataIndex: 'subject', key: 'subject', width: 250 },
      { title: 'Day', dataIndex: 'day', key: 'day', width: 250 },
      // { title: 'Answers', dataIndex: 'answers', key: 'answers', width: 250,
      //   render: answers => (
      //     <span>
      //       {answers.map(a => {
      //         return (
      //           <p>{a.answer}</p>
      //         );
      //       })}
      //     </span>
      // )}
    ]
  }

  getAll() {
    api.index('quizzes')
    .then(response => this.setState({quizzes: response.data}))
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getAll()
  }

  render() {
    const {quizzes} = this.state
    if(!quizzes) return <p>Loading...</p>
    return(
      <div>
        <h1 className={ styles.title }>History</h1>
        <div className={ styles.table }>
          <Table
              columns={this.columns}
              data={quizzes}
              scroll={{ y: 300 }}
              title={currentData => <div>History: {currentData.length} quizzes</div>}
          />
        </div>
      </div>
    )
  }
}