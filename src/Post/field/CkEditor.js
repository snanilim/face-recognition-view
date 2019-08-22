import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    Form,
    Col,
    Row,
    Input,
} from 'antd';


class CkEditor extends React.Component{
    render() {
        const { form } = this.props;
        return (
          <div className="App">
            <h6>Additional Info</h6>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Additional Info</p>"
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ editor => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ editor => {
                    console.log( 'Focus.', editor );
                } }
            />
          </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      messages: state.messages,
      user: state.auth,
    };
  };
  
  CkEditor.propTypes = {
    form: PropTypes.isRequired,
    dispatch: PropTypes.isRequired,
  };
  
  const FormCkEditor = Form.create()(CkEditor);
  export default withRouter(connect(mapStateToProps)(FormCkEditor));