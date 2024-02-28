'use client'
import { useRouter } from "next/navigation";

const PartPage = () => {
  const router = useRouter();

  console.log(router);
  return (
    <div>PartPage</div>
  )
}

export default PartPage