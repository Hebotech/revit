
export const RenderSwitch = ({activeNav}) => {
  switch (activeNav) {
    case 'style':
      return (
        <>
          <div className="col-6">
            <h4>
              This is the style view
            </h4>
          </div>
          <div className="col-6">
            Helloooow
          </div>
        </>
      );
    
    case 'type':
      return (
        <>
          <div className="col-6">
            <h4>
              This is the type view
            </h4>
          </div>
          <div className="col-6"></div>
        </>
      );
  
    default:
      break;
  }
}