// GENERATED
import { AnyConstructor, NgtCommonAttribute, provideCommonAttributeRef } from '@angular-three/core';
import { NgModule, Component } from '@angular/core';
import * as THREE from 'three/src/Three';

@Component({
  selector: 'ngt-uint32-buffer-attribute',
  standalone: true,
  template: '<ng-content></ng-content>',
  providers: [provideCommonAttributeRef(NgtUint32BufferAttribute)],
})
export class NgtUint32BufferAttribute extends NgtCommonAttribute<THREE.Uint32BufferAttribute> {
  static ngAcceptInputType_args: ConstructorParameters<typeof THREE.Uint32BufferAttribute> | undefined;

  override get attributeType(): AnyConstructor<THREE.Uint32BufferAttribute> {
    return THREE.Uint32BufferAttribute;
  }
}

@NgModule({
  imports: [NgtUint32BufferAttribute],
  exports: [NgtUint32BufferAttribute],
})
export class NgtUint32BufferAttributeModule {}
