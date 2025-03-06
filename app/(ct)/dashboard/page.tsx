
import { BreadcrumbComp } from "@/components/feat/components/breadcrumbComp";


export default function Dashboard() {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
          <BreadcrumbComp ruta="Home" />
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div>
            <span className="flex items-center justify-center align-middle">
              FOTOS
            </span>
            <div className="aspect-video rounded-xl bg-muted/50"></div>
          </div>
          <div>
            <span className="flex items-center justify-center align-middle">
              JUGADORES
            </span>
            <div className="aspect-video rounded-xl bg-muted/50"></div>
          </div>
          <div>
            <span className="flex items-center justify-center align-middle">
              ANALÍTICAS
            </span>
            <div className="aspect-video rounded-xl bg-muted/50"></div>
          </div>
        </div>
        <div>
          <div>
            <span className="flex items-center justify-center align-middle">
              SOBRE NOSOTROS
            </span>
            <div className="rounded-xl bg-muted/50 overflow-auto">
              <span className="flex items-center justify-center align-middle p-4">
                Clan Team es un equipo de futbol formado por amigos en el año
                2023, con una larga trayectoria, actualmente cuenta con 1 copa.
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </>
  );
}
