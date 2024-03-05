import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CardHover } from "./CardHover"
import { client } from "@/lib/sanity";


async function getDataprojectWeb() {
  const query = `*[_type == 'projectWeb']`;
  const data = await client.fetch(query);
  return data;
}
async function getDataprojectMl() {
  const query = `*[_type == 'projectMl']`;
  const data = await client.fetch(query);
  return data;
}
export async function TabsDemo() {
  const dataWeb = await getDataprojectWeb();
  const dataMl = await getDataprojectMl();
  return (
    <Tabs defaultValue="WebDevelopment" className="w-[80vw] mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="WebDevelopment"  >Web Devlopment</TabsTrigger>
        <TabsTrigger value="MachineLearning">Machine Learning</TabsTrigger>
      </TabsList>
      <TabsContent value="WebDevelopment">
        <Card className="bg-[#000000]/60">
          <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <CardContent className="space-y-2 my-4">
              <CardHover projectData={dataWeb} />
            </CardContent>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="MachineLearning">
        <Card className="bg-[#000000]/60">
        <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.3] bg-dot-black/[0.3] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <CardContent className="space-y-2 my-4">
              <CardHover projectData={dataMl} />
            </CardContent>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
