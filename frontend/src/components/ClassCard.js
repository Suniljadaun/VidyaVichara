import './ClassCard.css';

const ClassCard = ({ classItem, onClick, user }) => {
  const getClassInfo = () => {
    if (user?.role === 'instructor' && classItem.instructor === user._id) {
      return `${classItem.students?.length || 1} members (Instructor joined)`;
    }
    return `${classItem.students?.length || 0} students`;
  };

  return (
    <div className="class-card" onClick={onClick}>
      <div className="class-header">
        <h3>{classItem.title}</h3>
        <span className="class-code">{classItem.code}</span>
      </div>
      <div className="class-info">
        <p className="class-description">
          {getClassInfo()}
        </p>
      </div>
      <div className="class-status">
        <span className="status-badge">Active</span>
      </div>
    </div>
  );
};

export default ClassCard;
