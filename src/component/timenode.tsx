import * as React from 'react';
//import '../styles/main.css';
import '../sass/main.scss';

export interface TimeNodeProps {
    personName: string;
    description: string;
    timeRecieved: string;
    timeReleased: string;
    documentStatus: boolean;
    isLastItem: boolean;
    
}

export default class Timenode extends React.Component <TimeNodeProps, {} > {
    render(){        
        let statusColor = this.props.documentStatus ? "circle" : "circle-alarm"; 
        function EmptyButton() {
            return  <div className="buttons">
                        <a></a>  
                    </div>
        }  
        function ShowTagAsComplete() {
            return  <div className="buttons">
                        <a>Tag as Complete</a>  
                    </div>
        }
        function LastItem() {
            return  <div className="tl-status-last">
                        <div className="circle-cross"></div>
                        <div className ="circliner"> </div> 
                    </div>
        }        
        function IfDocumentStatus(props:any) {
            const isDone = props.isDone;
            if (!isDone)  return <ShowTagAsComplete />
            else return <EmptyButton />
        }          
        function IfLastItem(props:any) {
            const isLast = props.isLast;
            if (isLast) {
              return <LastItem />
            } else  return <div></div>;
        }
        return (
            <div className="timeline-container">
            <div className="timeline">
            
                <div className="tl-date"> 
                    <a> {this.props.timeRecieved}</a>
                </div>

                <div className="tl-status">
                    <div className ={statusColor}> </div> 
                    <div className ="circliner"> </div> 
                </div>
                <div className="tl-info">{this.props.personName} </div>
                <IfDocumentStatus isDone={this.props.documentStatus}/>
                
                <div className="tl-date-rel"> 
                    <a>{this.props.timeReleased}</a>
                </div>
                    <div className="vliner-container"> <div className="vliner"></div> </div>
                <div className="infoClass">
                    {this.props.description}
                </div>
                <div className="buttons">
                    <a></a>  
                </div>  
                <IfLastItem isLast={this.props.isLastItem} />
            </div>            
        </div>            
        )
    }
  }

