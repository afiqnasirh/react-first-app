import Card from "../components/Card";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Find Tech Jobs In Malaysia 🇲🇾</h1>
      <h6>Let employers find you. Or apply to companies directly.</h6>
      <div className="flex gap-4 flex-wrap">
        {JOB_DATA.map((element, index) => {
          console.log(index, element);
          return (
            <Card
              key={index}
              id={element.id}
              title={element.job}
              workplace={element.company}
              description={element.details.job_description[0]}
              date={element.post_date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
