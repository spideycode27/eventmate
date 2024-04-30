import EventForm from "@/components/shared/EventForm"
import {auth} from "@clerk/nextjs/server";

const UpdateEvent = () => {
    const{ sessionClaims } = auth();
    const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <h3 className="wrapper h3-boldtext-center sm:text-left">Update Event</h3>
      </section>
      <div className="wraper my-8">
          <EventForm userId={userId} type={"Update"} />
      </div>
    </>
  )
}

export default UpdateEvent