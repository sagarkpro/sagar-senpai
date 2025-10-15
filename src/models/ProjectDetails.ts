export default interface ProjectDetails{
  title: string,
  image: string,
  github: string,
  liveDeployment?: string, // link to live deployment
  contents: string[]
}