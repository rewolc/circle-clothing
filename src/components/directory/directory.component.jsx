import './directory.styles.scss'
import '../menu-item/menu-item.component'
import MenuItem from '../menu-item/menu-item.component';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectDirectSection } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
   <div className="directory-menu">
            {sections.map(({id, ... otherSecProps}) =>(
               <MenuItem key={id} {... otherSecProps} />
            ) )}
         </div>
      
   
);
const mapStateToProps = createStructuredSelector({
sections : selectDirectSection    
})

export default connect(mapStateToProps)(Directory);