class Block extends React.Component {
  render() {
      const self = this;
      let warning = <div className={"NeedAssc"}
                         title={"Registration is required for an associated section."}><b>!</b></div>;
      if (this.props.showWarning) {
          warning = null;
      }
      return <div className={"SchedBlock_container " + this.props.letterDay + " " + this.props.topC}
                  style={{left: this.props.x + "%", top: this.props.y + "%", width: this.props.width + "%", height: this.props.height + "%"}}>
          <div className={"SchedBlock " + this.props.letterDay + " " + this.props.topC + " " + this.props.assignedClass} id={this.props.id}
               onClick={function () {
                   angular.element(document.body).scope().clearSearch();
                   angular.element(document.body).scope().initiateSearch(self.assignedClass, 'courseIDSearch');
               }}>
              <div className={"CloseX"} style={{width: 100 + "%", height: 100 + "%"}}><span
                  onClick={function (e) {
                      e.stopPropagation();
                      angular.element(document.body).scope().sched.AddRem(self.assignedClass);
                  }}>X</span></div>
              {warning}
              <span className={"SecName"}>{this.props.name}</span>
          </div>
      </div>
  }


}