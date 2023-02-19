const EventComponent: React.FC = () => {
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handleDragStart = (event: React.DragEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      Events
      <input type="text" onChange={handleClick} />
      <div draggable onDragStart={handleDragStart}>
        Draggable item
      </div>
    </div>
  );
};

export default EventComponent;
