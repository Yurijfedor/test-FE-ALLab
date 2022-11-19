import { JobItem } from "./contact";
import { Contact } from "../../redux/contactsSlice";

interface Iprops {
  jobsList: Contact[];
}

export const ContactList: React.FC<Iprops> = ({ jobsList }) => {
  return (
    <ul>
      {jobsList.map((job) => {
        return (
          <li key={job.id}>
            <JobItem jobInfo={job} />
          </li>
        );
      })}
    </ul>
  );
};
