import ExpoModulesCore

public class ExpoBlendViewModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoBlendView")
    View(ExpoBlendView.self) {
      // Defines a setter for the `name` prop.
      Prop("blendMode") { (view, blendMode: String) in
          view.layer.compositingFilter = blendMode + "BlendMode"
      }
    }
  }
}
