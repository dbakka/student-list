function Home({students}){
    console.log({students});
    return(
      <div className="container my-5 g-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {students.map((student) => (
          <div className="col" key={student.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={student.image} className="card-img-top" alt={student.name} />
              <div className="card-body">
                <h3 className="card-title">{student.name}</h3>
                <p className="card-text">Age: {student.age}</p>
                <p className="card-text">Course: {student.course}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;