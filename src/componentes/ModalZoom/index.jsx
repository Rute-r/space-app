const ModalZoom = ({ foto }) => {
  return (
    <>
      <dialog open={!!foto}>
        <p>Greetings</p>
        <form method="dialog">
          <button>ok</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalZoom;
