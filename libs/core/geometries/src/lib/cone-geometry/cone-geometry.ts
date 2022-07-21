// GENERATED
import { AnyConstructor, NgtCommonGeometry, provideCommonGeometryRef } from '@angular-three/core';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import * as THREE from 'three/src/Three';

@Component({
  selector: 'ngt-cone-geometry',
  standalone: true,
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideCommonGeometryRef(NgtConeGeometry)],
})
export class NgtConeGeometry extends NgtCommonGeometry<THREE.ConeGeometry> {
  static ngAcceptInputType_args: ConstructorParameters<typeof THREE.ConeGeometry> | undefined;

  get geometryType(): AnyConstructor<THREE.ConeGeometry> {
    return THREE.ConeGeometry;
  }
}

@NgModule({
  imports: [NgtConeGeometry],
  exports: [NgtConeGeometry],
})
export class NgtConeGeometryModule {}
